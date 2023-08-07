export default defineEventHandler(async (event) => {
  
  const config = useRuntimeConfig()
  const { code } = event.context.params

  console.log('le event.context est : ', event.context );
  console.log("mon code est", code);

  const uri = `https://api.currencyapi.com/v3/latest?apikey=${config.API_KEY}&currencies/${code}`

  const {data} = await $fetch(uri)

  console.log(" mes data", data)

  return data
})