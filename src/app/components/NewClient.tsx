import Button from "./Button";
import { createClient } from "@/services/clients";
import { CreateClient } from "@/models";
import { useState } from "react";

interface Props {
  onSubmit: () => void;
}

const NewClient = ({ onSubmit }: Props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let client = { name } as CreateClient;

    createClient(client)
      .then(() => {
        onSubmit();
      })
      .catch((error) => {
        console.error("Error creating client:", error);
      });
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <p className="text-[#f15a24] font-roboto text-[36px] font-black leading-[42px] tracking-[0px] text-left">
        New Client
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-10 h-full justify-between"
      >
        <input
          type="text"
          placeholder="Client Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="placeholder:font-roboto placeholder:text-sm rounded-[7px] bg-[#e4e3e3] w-full pl-2"
        />
        <div className="flex justify-center">
          <Button type="submit">create client</Button>
        </div>
      </form>
    </div>
  );
};

export default NewClient;
