

export default defineEventHandler(async (event) => {

  // handle the request
  // const { name } = getQuery(event)

  // // handle post data
  // const {age} = await useBody(event)

  const config = useRuntimeConfig()
  console.log("ma config", config)

  // api call with private key
  const {data} = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${config.API_KEY}&currencies=EUR,USD,JPY`)

  // return {
  //   message: `Hello, Ninjas.... ${name}! tu as ${age} ans`
  // }
  return data
})