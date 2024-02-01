import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

//AuthenticationService.register({
// {
//    "email": "orasanu.anamaria19@gmail.com",
//    "password": "ana"
// }