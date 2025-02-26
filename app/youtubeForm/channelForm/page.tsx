"use client";

import { videos } from "@/app/data/data";
import Link from "next/link";
import { useState } from "react";

export default function ChannelForm() {
  const [name, setName] = useState("");
  return (
    <>
      <form className="channelForm">
        <label>
          channel :
          <select>
            {videos.map((video) => (
              <option key={video.id}>{video.channel.name}</option>
            ))}
          </select>
        </label>
        <label>
          name:
          <input placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
        </label>
        <button type="submit" className="submitButton">submit</button>
      </form>
      <Link href="/youtubeForm">
        <button className="myButton">youtubeForm</button>
      </Link>
    </>
  );
}
