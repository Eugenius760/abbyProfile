import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Twitter() {
  return (
    <div className="container">
        <div className="row twitter">
          <div>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="msaesnw"
            options={{ height: 500, width: 900 }}
          />
          </div>
        </div>
      </div>
  );
}

export default Twitter;