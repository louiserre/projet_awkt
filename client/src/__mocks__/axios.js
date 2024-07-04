
const mockResponse = { data: [{ 
    created_at:"2024-05-03T10:06:48.000Z",
    email:"lulu.louiserre@gmail.com",
    firstName:"virginia",
    id_contact:4,
    message:"bonjour je souhaite avoir des informations sur la formation tir",
    name:"louiserre",
    status:0,
    type_formation:"tir",
    updated_at:"2024-05-03T10:06:48.000Z"
}] };


/*const mockResponsePost = {
    data: [{ 
        id_user: 1,
        name: 'John',
        firstName: 'Doe',
        email: 'john.doe@example.com',
        role: 'user',
        acessToken: 'access-token',
        refreshToken: 'refresh-token',
        crsftoken: 'csrf-token'
    }]
  };*/

  


export default {
    get :  jest.fn().mockResolvedValue(mockResponse),
    /*post: jest.fn().mockResolvedValue(mockResponsePost),*/
}



