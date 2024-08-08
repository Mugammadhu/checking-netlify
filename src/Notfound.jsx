import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Notfound = () => {
  const navigate=useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate(-1)
    }, 3000);
  }, []);
  return <div>Page Not Found</div>;
};
