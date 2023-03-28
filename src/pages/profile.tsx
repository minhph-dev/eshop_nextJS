import React, { useEffect } from "react";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import axios from "axios";
import HeaderLabel from "@/components/HeaderLabel";
import TextArea from "@/components/TextArea";
import { useAuth } from "@/context/AuthContext";
import swal from "sweetalert";
import { useRouter } from "next/router";

export default function Profile() {
  const { user, setUser, updateprofile } = useAuth();
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    document.title = "My Profile";
    axios.get(`/api/profile`).then((res) => {
      if (isMounted) {
        if (res.status === 200) {
          setUser(res.data.myProfile);
          console.log(user);
        }
      }
    });
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: user?.name ?? "",
      phone: user?.phone ?? "",
      pin_code: user?.pin_code ?? "",
      address: user?.address ?? "",
    };
    updateprofile(data);
  };

  if (!user) {
    if (typeof window !== "undefined") {
      swal("Warning", "Login to goto Profile Page", "warning");
      router.push("/login");
      return null;
    }
  }
  return (
    <form
      className="w-full md:w-2/4 mx-auto px-5 md:px-0 my-10"
      onSubmit={handleUpdate}
    >
      <HeaderLabel
        title="Profile"
        contentButton="Change password"
        href="/change-password"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          value={user?.name}
          onChange={handleInput}
          name="name"
          label="User Name"
          type="text"
          variant="small"
        />
        <TextField
          value={user?.email}
          onChange={handleInput}
          className="bg-gray-100 pointer-events-none"
          name="email"
          variant="small"
          label="Email"
          type="email"
          disabled
        />
        <TextField
          value={user?.phone}
          onChange={handleInput}
          name="phone"
          variant="small"
          label="Phone Number"
          type="text"
        />
        <TextField
          value={user?.pin_code}
          onChange={handleInput}
          name="pin_code"
          variant="small"
          label="Zip/Pin Code"
          type="text"
        />
      </div>
      <TextArea
        value={user?.address}
        onChange={handleInput}
        name="address"
        label="Address"
        className="mt-4"
        variant="small"
      />
      <Button type="submit" className="mt-4" variant="contained">
        Save data
      </Button>
    </form>
  );
}
