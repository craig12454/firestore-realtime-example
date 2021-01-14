import { ref } from "vue"
import { projectFirestore } from "../firebase/config"


const testCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('messages').get()
      console.log(res)
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { error, documents, load }
}

export default testCollection