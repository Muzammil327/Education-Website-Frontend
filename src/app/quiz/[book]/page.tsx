"use client";
import { useParams } from "next/navigation";
import Header from "@/src/components/layout/header/page";
import QuizHeading1 from "@/src/components/quiz/heading1/page";

export default function Page() {
  const params = useParams<{
    book: string;
  }>();

  // convert hero text to capitalize and remoce slash
  const capitalizeWords = (text: string) => {
    return text
      .replace(/(^|\s)\S/g, (match) => match.toUpperCase())
      .replace(/-/g, " ");
  };

  const capitalizedText = capitalizeWords(params.book);
  const herotext = capitalizedText + "  " + " Quiz ";
  return (
    <>
      <Header title={herotext} />
      <QuizHeading1 params={params.book} />
    </>
  );
}
