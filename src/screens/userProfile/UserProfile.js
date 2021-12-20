import "./userProfile.css";
import profPic from "../../images/facebook.jpg";

const UserProfile = () => {
  return (
    <>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="text-center profilePicContainer">
              <img
                src={profPic}
                alt=" not working returns"
                class="rounded-circle profilePic"
              />
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6 profileName">
            <h1> Lalit Kumar</h1>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <p>
                <i class="bi bi-geo-alt" style={{ padding: 5 + "px" }}></i>
                GandhiNagar, Gujrat, India
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <h6>Designation</h6>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <button type="button" class="btn btn-outline-secondary">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="row justify-content-center">
        <div class="col-8">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-responses-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-responses"
                type="button"
                role="tab"
                aria-controls="nav-responses"
                aria-selected="true"
              >
                Responses
              </button>
              <button
                class="nav-link"
                id="nav-petition-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-petition"
                type="button"
                role="tab"
                aria-controls="nav-petition"
                aria-selected="false"
              >
                Petition
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-responses"
              role="tabpanel"
              aria-labelledby="nav-responses-tab"
              style={{ textAlign: "left" }}
            >
              responses card portion
            </div>
            <div
              class="tab-pane fade"
              id="nav-petition"
              role="tabpanel"
              aria-labelledby="nav-petition-tab"
              style={{ textAlign: "center" }}
            >
              <h4>petition card portion</h4>
            </div>
          </div>
        </div>
        </div>
        </div>
    </>
  );
};

export default UserProfile;
