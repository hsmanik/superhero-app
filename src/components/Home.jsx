import { useContext } from "react";
import { Card } from "./Card";
import { ThemeContext } from "../context/ThemeContext";

export const Home = () => {
  const { response, isLoading } = useContext(ThemeContext);

  return (
    <div className=" max-w-[1240px] grid grid-cols-1 mx-auto text-white  md:grid-cols-2 lg:grid-cols-4 gap-4">
      {response?.map((data, key) => (
        <Card key={key} data={data} />
      ))}
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
