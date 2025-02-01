import CommonWrapper from "@/components/common/CommonWrapper";
import TextContentPage from "@/components/common/TextContentPage";
import LoadingComponent from "@/components/loaders/LoadingComponent";
import useAxiosPublic from "@/hooks/api/useAxiosPublic";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DynamicPage = () => {
  const { id } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    // Fetch the page data based on the id
    axiosPublic
      .get(`/page/single/${id}`)
      .then((response) => {
        const data = response.data;
        if (data.status) {
          setPage(data.data.page);
        } else {
          setError(data.message || "Page not found.");
        }
      })
      .catch((err) => {
        setError("Failed to fetch page details.");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, axiosPublic]);

  if (loading) return <LoadingComponent />;

  return (
    <CommonWrapper>
    <div>
      <TextContentPage
        title={page.title}
        content={page.content}
      />
    </div>
  </CommonWrapper>
  );
};

export default DynamicPage;
