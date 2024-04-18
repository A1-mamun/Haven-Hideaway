import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";
import { MdModeEditOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, profileUpdate } = useContext(AuthContext);
  const [nameIsDisable, setNameIsDisable] = useState(true);
  const [photoIsDisable, setPhotoIsDisable] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const { name, photo } = data;
    // console.log(name, photo);
    profileUpdate(name, photo)
      .then(() => {
        console.log("profile updated");
        console.log(result.user);
      })
      .catch((error) => console.error(error));
    navigate("/");
  };
  return (
    <div className="bg-base-200 text-center py-14 rounded-2xl">
      <Helmet>
        <title>HavenHideaway | Udate Profile</title>
      </Helmet>
      <h1 className="text-4xl font-bold mb-7">Update Your Profile</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
        <div className="flex justify-center lg:text-left w-full max-w-sm ">
          <img
            className="w-2/3 rounded-full"
            src={user.photoURL}
            alt="Profile picture"
          />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder={user.displayName}
                className="input input-bordered"
                disabled={nameIsDisable}
                {...register("name")}
              />
              <span
                onClick={() => setNameIsDisable(!nameIsDisable)}
                className="absolute top-[52px] right-4"
              >
                {nameIsDisable && <MdModeEditOutline />}
              </span>
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                placeholder={user.photoURL}
                className="input input-bordered "
                disabled={photoIsDisable}
                {...register("photo")}
              />
              <span
                onClick={() => setPhotoIsDisable(!photoIsDisable)}
                className="absolute top-[52px] right-4"
              >
                {photoIsDisable && <MdModeEditOutline />}
              </span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder={user.email}
                className="input input-bordered placeholder-black"
                disabled
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
