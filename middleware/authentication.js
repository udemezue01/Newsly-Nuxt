export default function ({ store, redirect }) {
  if (!store.getters['isLoggedIn']) {
    return redirect('/login')
  }
}


// <template>
//   <div>
//     <input type="file" ref="fileInput" @change="uploadFile"/>
//   </div>
// </template>

// <script>
// await this.$fire.authReady()

// export default {
//   methods: {
//     async uploadFile() {
//       const file = this.$refs.fileInput.files[0]
//       const storageRef = firebase.storage().ref()
//       const fileRef = storageRef.child(file.name)
//       await fileRef.put(file)
//       console.log('File uploaded successfully!')
//     }
//   }
// }
// </script>
