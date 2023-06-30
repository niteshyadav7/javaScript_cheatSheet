/**
const countries = document.querySelector('.countries');

const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/name/india');

request.send();

request.addEventListener('load', function () {
  const [data] = JSON.parse(request.responseText);
  console.log(data);

  const html = `
  <img src="${data.flags.svg}" alt"${data.flags.alt}" width="300"/>
  `;
  countries.insertAdjacentHTML('beforeend', html);
});
*/

// Optimised Code
/**

const countries = document.querySelector('.countries');

const renderCountry = function (data) {
  const html = `
    <section>
      <img src="${data.flags.svg}" alt"${data.flags.alt}" width="300"/>
      <h1>${data?.name?.common}</h1>
      </section>
      `;
  countries.insertAdjacentHTML('beforeend', html);
};

const countryName = function (name) {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${name}`);

  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(request.responseText);
    console.log(data);
    renderCountry(data);
    const neighour = data.borders[0];

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/name/${neighour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(request2.responseText);
      console.log(data2);
      renderCountry(data2);
    });
  });
};

countryName('Russia');
 */

// Promises

// const countryName = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (
//     response
//   ) {
//     return response.json();
//   }).then(function(data){
//     console.log(data);
//   })
// };
// countryName('Russia');

// const selectTag = document.querySelector('.countries');

// const render = function (data) {
//   const html = `
// <div>
// <img src="${data.flags.svg}" alt="images" width="400"/>
// </div>
// `;
//   selectTag.insertAdjacentHTML('beforeend', html);
// };

// const countryName = function (name) {
//   fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then(res => res.json())
//     .then(data => {
//       render(data[0]);
//       console.log(data[0]);
//       const neighour = data[0].borders?.[0];
//       return fetch(`https://restcountries.com/v3.1/name/${neighour}`);
//     })
//     .then(res => res.json())
//     .then(data => {
//       render(data[0]);
//       console.log(data[0]);
//       const next = data[0].borders[0];
//       return fetch(`https://restcountries.com/v3.1/name/${next}`);
//     })
//     .then(res=>res.json())
//     .then(data=>render(data[0]))
// };
// countryName('portugal');

// Simple Promises::

// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve(`Yey!, You won the Lottery.😉`);
//   } else {
//     reject(`You lost the lottery.💩`);
//   }
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// async /await

try {
  let x = 3;
  const z = 34;
  z = 32;
} catch (err) {
  console.error(err.message);
}
