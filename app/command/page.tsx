"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExecPost200Response, ExecPostRequest } from "@/lib/api";
import { api } from "@/lib/utils";
import { useRef, useState } from "react";
import useSWR, { Fetcher } from "swr";


export default function Command() {
  const [command, setCommand] = useState("kubectl get po");
  const [hide, setHide] = useState(false);
  const handleSubmit = () => {
    console.log(command);
    setHide(true);
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Input type="text" value={command} onChange={(e) => setCommand(e.target.value)} />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <div className="mt-4">
        {hide ? <FetchAndRender command={command} /> : <></>}
      </div>
    </div>
  );
}

function FetchAndRender(
  props: { command: string }
) {
  const fetcher: Fetcher<ExecPost200Response> = (param: string) => api.execPost({ cmd: param });
  const { data, error, isLoading } = useSWR(props.command, fetcher);
  const decoded = atob(data?.output || "");
  return (
    <>
      {data ? <div className="w-full whitespace-pre-wrap">{decoded}</div> : null}
    </>
  );
}