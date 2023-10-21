import { NextResponse } from "next/server";
import axios from "axios";
export async function GET(request, {params}){
    const seleksi = params.id;
    const csrf = await fetch('https://oilprice.com/ajax/csrf', {
        cache: "force-cache",
        headers: {
          'Content-Type': 'application/json',
        },
    })
    const csrftoken = await csrf.json()
    console.log(csrftoken.hash);

    try {
        var dataAll = [];
        if(seleksi == "preview"){
          var codeAll = [45,46,4464,51,53,52,50,29,4460,68];
        }
        if(seleksi == "futures"){
          var codeAll = [45,46,4464,51,53,52,50,29,4460,68,48,71,72,4466,257,144,151,76,26,27,44,140,54,4447,4448];
        }
        if(seleksi == "opecmember"){
          var codeAll = [4185,4186,4188,4189,4190,4402,152];
        }  
        if(seleksi == "all"){
          var codeAll = [45,46,4464,51,53,52,50,29,4460,68,48,71,72,4466,257,144,151,76,26,27,44,140,54,4447,4448,4185,4186,4188,4189,4190,4402,152];
        }      

        let period = 3;
        for (var i = 0; i < codeAll.length; i++) {
          var jsonprice = {};
          // get oil and gas price data based on period and blend
          const blend_data = await axios.post(
            `https://oilprice.com/freewidgets/json_get_oilprices`,
            `blend_id=${codeAll[i]}&period=${period}&op_csrf_token=${csrftoken.hash}`,
            {
              headers: {
                Accept: "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/x-www-form-urlencoded",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Sec-GPC": 1,
                TE: "trailers",
                "X-Requested-With": "XMLHttpRequest",
              },
            }
          );
    
          jsonprice = {
            id: blend_data.data.blend.id,
            name: blend_data.data.blend.blend_name,
            last_price:  blend_data.data.last_price,
            change_percent: blend_data.data.change_percent,
            change: blend_data.data.change,
          }
          dataAll.push(jsonprice);
        }
        console.log("Fetch Sukses!");
        return NextResponse.json(dataAll);
    }
    catch(error) {
        console.log(error);
        return NextResponse.json({
            message: "request failed",
        });
    }
}