"use server";
import React from "react";

import { createClient } from "@/utils/supabase/server";
import { title } from "process";
async function GetPosts() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  const formattedData = notes.map(
    (item) => `ID: ${item.id}, Title: ${item.title}`
  );
  formattedData.forEach((item) => console.log(item));
  return (
    <>
      {notes.map((item) => (
        <div key={item.id} className="note-container">
          <p>IDme: {item.id}</p>
          <h1>Title: {item.title}</h1>
        </div>
      ))}
    </>
  );
}

export default GetPosts;
