const topic=({match})=>{
  console.log(match)
  console.log(match.params.topic)
}
const obj={match:{
  path: "/repo/:topic?",
  url: "/repo/vue",
  isExact: true,
  params: {
    topic:"vue"
  }
}}
topic(obj)