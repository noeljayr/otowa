"use client";

import { ModelsResponse } from "@/types/models";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";

function ModelsTable() {
  const [modelsResponse, setModelsResponse] = useState<ModelsResponse | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchModels() {
      try {
        const response = await fetch("/api/models", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ModelsResponse = await response.json();
        setModelsResponse(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchModels();
  }, []);

  return (
    <div id="models" className="flex flex-col px-10 max-sm:px-4 min-[1440px]:px-[14vw] py-10 space-y-10">
      <div className="flex flex-col items-center">
        <h3>Active AI Models</h3>
        <p className="opacity-75 w-[54ch] text-center max-sm:w-full">
          All models you need in one place. Browse and compare to see what's
          best for your use case
        </p>
      </div>

      <div className="flex flex-col">
        <div className="header grid pb-2 border-b border-b-[#F0F0F0] gap-4 grid-cols-[3rem_25%_4rem_15%_1fr] max-sm:grid-cols-[3rem_1fr_4rem]">
          <span className="font-semibold"></span>
          <span className="font-semibold">Name</span>
          <span className="font-semibold">Version</span>
          <span className="font-semibold max-sm:hidden">Provider</span>
          <span className="font-semibold max-sm:hidden">Best for</span>
        </div>
        {!loading &&
          modelsResponse &&
          modelsResponse.data.map((model, index) => (
            <div
              key={index}
              className="row gap-4 py-2 border-b border-b-[#F0F0F0] grid items-center grid-cols-[3rem_25%_4rem_15%_1fr] max-sm:grid-cols-[3rem_1fr_4rem]"
            >
              <span className="h-12 w-12 bg-[#FAFAFA] border border-[#E6E6E6] flex items-center justify-center rounded-lg">
                <img
                  src={model.logo}
                  alt={model.name}
                  className="h-6 w-6 object-contain"
                />
              </span>
              <span className="truncate h-fit">{model.name}</span>
              <span className="h-fit">
                <span className="bg-[#F5F5F5] p-1 px-2 font-p3 font-semibold rounded-md border border-[#E3E3E3]">
                  {model.version}
                </span>
              </span>
              <span className="truncate h-fit max-sm:hidden">
                {model.provider}
              </span>
              <span className="truncate h-fit max-sm:hidden font-normal">
                {model.best_for}
              </span>
            </div>
          ))}
        {!loading && modelsResponse && (
          <div className="w-full flex mt-2">
            <div className="flex items-center mr-auto space-x-2">
              <span
                className={`h-6 w-6 border ${
                  modelsResponse.pagination.has_previous
                    ? "bg-[#F2F2F2] border-transparent cursor-pointer"
                    : " border-[#E6E6E6] bg-transparent cursor-not-allowed"
                } rounded-full flex items-center justify-center`}
              >
                <IconChevronLeft
                  className={`h-4 w-4 ${
                    modelsResponse.pagination.has_previous
                      ? " opacity-75"
                      : " opacity-25"
                  }`}
                />
              </span>
              <span
                className={`h-6 w-6 border ${
                  modelsResponse.pagination.has_next
                    ? "bg-[#F2F2F2] border-transparent cursor-pointer"
                    : " border-[#E6E6E6] bg-transparent cursor-not-allowed"
                } rounded-full flex items-center justify-center`}
              >
                <IconChevronRight
                  className={`h-4 w-4 ${
                    modelsResponse.pagination.has_next
                      ? " opacity-75"
                      : " opacity-25"
                  }`}
                />
              </span>
            </div>

            <div className="flex items-center font-semibold space-x-1"><span className="opacity-50">Showing</span> <span>1-5 of 5</span> <span className="opacity-50">models</span></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModelsTable;
