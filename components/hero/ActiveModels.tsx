"use client"

import Link from 'next/link'
import { ModelsResponse } from "@/types/models";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import { useEffect, useState } from "react";

function ActiveModels() {
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
    <Link href={'/#models'} className="absolute font-p3 h-8 max-[900px]:self-center -bottom-4 bg-[#FAFFFB] border border-[#B2FFC8] px-3 rounded-full text-[#3A7D66] flex items-center">
        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[#09DE48]"></span>
        {modelsResponse?.pagination.total_items} Active AI models
      </Link>
  )
}

export default ActiveModels