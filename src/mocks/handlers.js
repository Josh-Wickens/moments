import { rest } from "msw";

const baseURL = 'https://drf-api.herokuapp.com'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
      return res(
        ctx.json({
            "pk": 3,
            "username": "Test2",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 3,
            "profile_image": "https://res.cloudinary.com/wickster/image/upload/v1/media/images/Gohan_Profile_Pic_kz5tto"
            })
      );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
      return res(ctx.status(200));
    }),
  ];
