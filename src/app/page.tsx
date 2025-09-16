"use client";
import { useUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import Button from "@/app/components/Button";
import Dashboard from "./components/Dashboard";
import { useClients } from "@/hooks/use-clients";
import NewClient from "./components/NewClient";

export default function Home() {
  const { user, loading } = useUser();
  const { clients, refresh } = useClients();
  const router = useRouter();
  const [popupOpen, setPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!popupRef.current?.contains(event.target as Node)) {
        setPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  const newClient = () => {
    setPopupOpen(true);
  };

  const handleNewClientSubmit = () => {
    setPopupOpen(false);
    refresh();
  };

  if (loading) return <p>Loading...</p>;
  else if (user)
    return (
      <>
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col my-10 items-center w-full gap-5">
            <img src="/logo.svg" alt="Logo" />
            <div className="flex gap-5">
              <Button>new project</Button>
              <Button>new task</Button>
              <Button onClick={newClient}>new client</Button>
              <Button>new invoice</Button>
            </div>
            <div className="flex flex-col w-[calc(100%-100px)] h-full self-start gap-5">
              <div className="w-full border-t border-gray-300" />
              <Dashboard clients={clients} />
              <div className="w-full border-t border-gray-300" />
            </div>
          </div>
        </div>
        {popupOpen && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div
              ref={popupRef}
              className="w-[33%] aspect-square mx-auto my-auto bg-white rounded-[16px] p-10"
            >
              <NewClient onSubmit={handleNewClientSubmit} />
            </div>
          </div>
        )}
      </>
    );
  else return null;
}
