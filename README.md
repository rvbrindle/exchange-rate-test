# exchange

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
The Exchange rate API link has been updated to use https and gather all of the data upon mount, as these values contain the inverse rate
The *Exchange* rate can be worked out by / the 2 currencies inverse rates

* this would be less computationally expensive than making AJAX requests upon each selection

* A rotate feature has been added to quickly switch between 2 currencies

* The validations should catch very basic front end errors such as a converted value or amount to convert being inconsequential

* The selected country/currencies should be stored in state - Pinia

### If more time was at my disposal to complete this task

I would have liked to do a refactor ( in particular looking at var naming consistency ), Testing to check the api call is returning successfully
as well as logic operates and returns as expected.
