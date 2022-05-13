import React, { ReactElement } from "react";

interface contentListType {
  id: String;
  header: String;
  content: String | ReactElement<any, any>;
}

interface contentNavType {
  id: String;
  content: String;
}

interface socialLinkType {
  url: string;
  shortURL: string;
  icon: string;
}

export { contentListType, contentNavType, socialLinkType };
