import { useClients } from "@/hooks/use-clients";
import { Client } from "@/models";

interface Props {
  clients: Client[];
}

const Dashboard = ({ clients }: Props) => {
  return (
    <div className="flex flex-col gap-2.5 h-full w-full ml-10">
      <p className="text-[#f15a24] font-roboto text-[36px] font-black leading-[42px] tracking-[0px] text-left">
        client list
      </p>
      <div className="w-full border-t border-gray-300" />
      <ul className="w-full flex flex-col">
        {clients.map((client) => (
          <div key={client.id + "div"}>
            <li key={client.id} className="font-bold">
              {client.name}
            </li>
            <p key={client.id + "p"} className="italic mb-2.5">
              brief notes ? lorem ipsum lorem ipsum
            </p>
            <div
              key={client.id + "b"}
              className="w-full border-t border-gray-300 mb-2.5"
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
