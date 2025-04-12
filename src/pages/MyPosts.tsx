import { PostContainer, ReportContainer } from "./../components/";
import { useContext } from "react";
import { BackButton, TopRow } from "../components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useFetchPosts, useFetchReports } from "../hooks";
import { SyncLoader } from "react-spinners";

export const MyPosts = () => {
  const user = useContext(AuthContext);
  const { posts, loading: postsLoading } = useFetchPosts();
  const { reports, loading: reportsLoading } = useFetchReports();
  const loading = postsLoading || reportsLoading;
  const navigate = useNavigate();

  if (!user && !loading) {
    return (
      <>
        <TopRow />
        <div className="h-screen bg-light-gray p-5 pt-8 rounded-t-4xl mt-5">
          <BackButton />
          <div className="flex-center flex-col gap-5 mt-6 font-sans text-sm">
            <p>Por favor, vuelve a iniciar sesión</p>
            <button
              onClick={() => navigate("/sign-in")}
              className="button-pill-small text-sm font-sans"
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <TopRow />
      <div className="h-screen rounded-t-4xl mt-5 bg-light-gray">
        {loading ? (
          <SyncLoader
            color="#dff5b2"
            className="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
          />
        ) : (
          <div className="p-5">
            <BackButton />
            {posts.length === 0 && reports.length === 0 ? (
              <p className="flex-center mt-4">
                No tienes publicaciones activas.
              </p>
            ) : (
              <div className="mt-4">
                <h3>Mis publicaciones.</h3>
                {reports.length > 0 &&
                  reports.map((report) => (
                    <ReportContainer key={report.id} report={report} />
                  ))}
                {posts.length > 0 &&
                  posts.map((post) => (
                    <PostContainer key={post.id} animal={post} />
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
