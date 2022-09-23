document.addEventListener("DOMContentLoaded",function(){
    document.querySelector('#MyForm').onsubmit = function() {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "JRRGUZ65vKJ5IugXs2fw0GQQx67tTsOt");
        
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        };
        
        fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=thb&base=eur", requestOptions)
        .then(response => response.json())
        .then(result => {
            const rate = result.rates.THB;
            document.querySelector("#rate").innerHTML = `1 EUR = ${rate.toFixed(2)} baht`;
            let money = document.querySelector("#thai").value;

            function convert () {
                return money / rate;
            }
            document.querySelector("#result").value = `${convert().toFixed(2)}`;
        })
          .catch(error => console.log('error', error));
          return false; 
    };
});

