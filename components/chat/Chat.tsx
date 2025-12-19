import { IconSend2 } from "@tabler/icons-react";
import React from "react";

function Chat() {
  return (
    <div className="grid sm:h-full h-[55vh] max-sm:mt-2 sm:overflow-hidden gap-1 grid-rows-[auto_1fr]">
      <span className="font-p1 font-semibold px-2">Chat with Otowa</span>
      <div className="sm:h-full rounded-(--radius-m) border border-(--border) bg-[#FCFCFC]/75 sm:grid gap-2 grid-rows-[auto_1fr_auto] flex flex-col overflow-hidden">
        <span className="font-semibold mx-auto px-2 pt-2">Today</span>

        <div className="grid auto-rows-min overflow-y-auto h-full p-2">
          <div className="flex flex-col">
            <div className="flex items-center px-2 mb-1">
              <span>Otowa Support</span>
              <span className="font-p3 ml-2 opacity-25 font-normal">
                6:25 am
              </span>
            </div>
            <p className="sm:max-w-60 max-w-[65%] p-2 font-normal bg-[#F7F7F7] rounded-(--radius-m)">
              Hi, I am here to answer all your questions. Questions that i
              cannot answer will be directed to a member of our team
            </p>
          </div>
        </div>

        <div className="w-full p-2 border-t border-t-black/5 grid grid-cols-[1fr_auto] bg-white">
          <input
            type="text"
            className="w-full h-8 outline-0 border-0 bg-transparent"
            placeholder="Ask anything"
          />

          <button className="h-8 w-8 flex bg-(--primary) rounded-full border border-black/25 items-center justify-center">
            <IconSend2 color="white" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
