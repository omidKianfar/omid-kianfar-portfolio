interface TitleComponentProps {
  eyebrow: string;
  title: string;
  description: string;
}

type experienceType = {
  id: number;
  title: string;
  company?: string;
  HowWork?: string;
  WhatDo?: [];
  techStack?: string[];
};

type experienceWhatDo = {
  id: number;
  title: string;
  desdription?: string;
};

export type { TitleComponentProps, experienceType,experienceWhatDo };
