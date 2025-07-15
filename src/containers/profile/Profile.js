import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = async () => {
        try {
          const response = await fetch("/profile.json", {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            }
          });
          if (response.ok) {
            // If the response is ok, parse the JSON data
            console.log("Fetching profile data from profile.json");
            console.log("response", response);
            const data = await response.json();
            setProfileFunction(data);
          } else {
            console.error("Failed to fetch profile data");
            setProfileFunction("Error");
            openSource.showGithubProfile = "false";
          }
        } catch (error) {
          console.error(
            `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
          );
          setProfileFunction("Error");
          openSource.showGithubProfile = "false";
        }
      };
      getProfileData();
    }
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
