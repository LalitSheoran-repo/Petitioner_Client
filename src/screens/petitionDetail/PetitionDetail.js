import "./petitionDetail.css";
import petPic from "../../images/facebook.jpg";

const PetitionDetail = () => {
  return (
    <>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-10">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="nav-petitionDetail-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-petitionDetail"
                    type="button"
                    role="tab"
                    aria-controls="nav-petitionDetail"
                    aria-selected="true"
                  >
                    Petition Details
                  </button>
                  <button
                    class="nav-link"
                    id="nav-petitionUpdate-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-petitionUpdate"
                    type="button"
                    role="tab"
                    aria-controls="nav-petitionUpdate"
                    aria-selected="false"
                  >
                    Updates
                  </button>
                </div>
              </nav>
            </div>
          </div>

          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-petitionDetail"
              role="tabpanel"
              aria-labelledby="nav-petitionDetail-tab"
              style={{ textAlign: "left" }}
            >
              {/* Petition Details portion */}
              <div class="row justify-content-center">
                <div class="col-10 text-center">
                  <h1>Petition Heading</h1>
                </div>
              </div>

              {/* Petition Content Area */}

              <div class="row">
                <div class="col-6 text-center">
                    <img
                      src={petPic}
                      alt=" not working returns"
                      class=" petitionPic img-fluid"
                    />
                  <div class="petitionContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis at tellus at urna condimentum mattis
                    pellentesque id. Vitae nunc sed velit dignissim sodales ut
                    eu sem integer. Purus ut faucibus pulvinar elementum integer
                    enim neque volutpat ac. Pulvinar proin gravida hendrerit
                    lectus a. Ante metus dictum at tempor commodo ullamcorper a.
                    Est ultricies integer quis auctor elit sed vulputate.
                    Scelerisque eu ultrices vitae auctor. In ante metus dictum
                    at tempor commodo ullamcorper a lacus. Lacinia quis vel eros
                    donec. Leo duis ut diam quam nulla porttitor massa. At erat
                    pellentesque adipiscing commodo. Id aliquet risus feugiat in
                    ante metus. In ornare quam viverra orci sagittis eu. Viverra
                    justo nec ultrices dui sapien. Mauris augue neque gravida
                    in. Amet consectetur adipiscing elit ut aliquam purus sit
                    amet. Turpis egestas integer eget aliquet. Condimentum vitae
                    sapien pellentesque habitant morbi tristique senectus.
                    Consequat interdum varius sit amet mattis. Enim diam
                    vulputate ut pharetra sit amet aliquam id. Odio eu feugiat
                    pretium nibh ipsum consequat nisl vel pretium. Sed turpis
                    tincidunt id aliquet risus. Ornare massa eget egestas purus.
                    Elit duis tristique sollicitudin nibh. Aenean et tortor at
                    risus viverra. Congue quisque egestas diam in. Metus
                    vulputate eu scelerisque felis imperdiet. Amet nulla
                    facilisi morbi tempus iaculis urna id. Pretium quam
                    vulputate dignissim suspendisse in est ante. Eu non diam
                    phasellus vestibulum lorem sed risus. Laoreet suspendisse
                    interdum consectetur libero id faucibus nisl tincidunt eget.
                    Orci a scelerisque purus semper. Tortor at risus viverra
                    adipiscing at in. Lectus urna duis convallis convallis
                    tellus id interdum. Dui ut ornare lectus sit amet est
                    placerat. Consectetur adipiscing elit duis tristique
                    sollicitudin. Neque egestas congue quisque egestas diam in.
                   
                  </div>
                </div>
                <div class="col-4 text-center align-items-center">
                    <h2>Sign the petition</h2>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-petitionUpdate"
              role="tabpanel"
              aria-labelledby="nav-petitionUpdate-tab"
              style={{ textAlign: "center" }}
            >
              <h4>Petition Updates portion</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetitionDetail;
