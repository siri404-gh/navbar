import NavigationBar from "./components/NavigationBar/NavigationBar";
import NavigationBarSlot from "./components/NavigationBar/NavigationBarSlot";
import NavigationBarIcon from "./components/NavigationBar/NavigationBarIcon";
import NavigationBarMedia from "./components/NavigationBar/NavigationBarMedia";
import NavigationBarTitle from "./components/NavigationBar/NavigationBarTitle";
import NavigationBarLogo from "./components/NavigationBar/NavigationBarLogo";
import NavigationBarButton from "./components/NavigationBar/NavigationBarButton";
import NavigationBarButtonText from "./components/NavigationBar/NavigationBarButtonText";
import NavigationBarProfile from "./components/NavigationBar/NavigationBarProfile";
import NavigationBarProfileContent from "./components/NavigationBar/NavigationBarProfileContent";
import NavigationBarSearch from "./components/NavigationBar/NavigationBarSearch";

export default function App() {
  return (
    <div style={{ width: 500 }}>
      <h2>NavigationBar</h2>
      <NavigationBar />
      <h2>NavigationBar Slot</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary" />
      </NavigationBar>
      <h2>NavigationBar Wide Slot</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary" isWide />
      </NavigationBar>
      <h2>NavigationBar Dual Slot</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary" />
        <NavigationBarSlot slot="secondary" />
      </NavigationBar>
      <h2>NavigationBar Dual Wide Slot</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary" isWide />
        <NavigationBarSlot slot="secondary" isWide />
      </NavigationBar>
      <h2>Icon</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary">
          <NavigationBarIcon onClick={() => alert("icon 1")} />
        </NavigationBarSlot>
      </NavigationBar>
      <h2>Icon with Media</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary">
          <NavigationBarIcon onClick={() => alert("icon 1")}>
            <NavigationBarMedia height="24" width="24" />
          </NavigationBarIcon>
        </NavigationBarSlot>
      </NavigationBar>
      <h2>2 Icons</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary">
          <NavigationBarIcon onClick={() => alert("icon 1")}>
            <NavigationBarMedia height="24" width="24" />
          </NavigationBarIcon>
          <NavigationBarIcon onClick={() => alert("icon 2")}>
            <NavigationBarMedia height="24" width="24" />
          </NavigationBarIcon>
        </NavigationBarSlot>
      </NavigationBar>
      <h2>Imbalanced icons</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary" isWide>
          <NavigationBarIcon onClick={() => alert("icon 1")}>
            <NavigationBarMedia height="24" width="24" />
          </NavigationBarIcon>
          <NavigationBarIcon onClick={() => alert("icon 2")}>
            <NavigationBarMedia height="24" width="24" />
          </NavigationBarIcon>
        </NavigationBarSlot>
        <NavigationBarSlot slot="secondary" isWide>
          <NavigationBarIcon onClick={() => alert("icon 3")}>
            <NavigationBarMedia height="24" width="24" />
          </NavigationBarIcon>
        </NavigationBarSlot>
      </NavigationBar>
      <h2>Title</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary" isWide />
        <NavigationBarTitle
          onClick={() => alert("title")}
          text="Lorem ipsum dolor sit amet, consectetur adipisicing."
        />
        <NavigationBarSlot slot="secondary" isWide />
      </NavigationBar>
      <h2>Logo</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary" isWide />
        <NavigationBarLogo onClick={() => alert("logo")} />
        <NavigationBarSlot slot="secondary" isWide />
      </NavigationBar>
      <h2>Button</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary" isWide />
        <NavigationBarSlot slot="secondary" isWide>
          <NavigationBarButton onClick={() => alert("Button text")}>
            {/* <NavigationBarButtonText>Click me </NavigationBarButtonText> */}
          </NavigationBarButton>
        </NavigationBarSlot>
      </NavigationBar>
      <h2>Profile</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary" isWide />
        <NavigationBarProfile onClick={() => alert("profile")}>
          <NavigationBarProfileContent
            user={{
              name: "Hanna"
            }}
          />
        </NavigationBarProfile>
        <NavigationBarSlot slot="secondary" isWide />
      </NavigationBar>
      <h2>Profile + additional</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary" isWide />
        <NavigationBarProfile onClick={() => alert("profile")}>
          <NavigationBarProfileContent
            user={{
              name: "Hanna"
            }}
            additional="Lorem ipsum dolor sine qua non est recusanda"
          />
        </NavigationBarProfile>
        <NavigationBarSlot slot="secondary" isWide />
      </NavigationBar>
      <h2>Search</h2>
      <NavigationBar>
        <NavigationBarSearch value="" a11y={{ inputLabel: "Search" }} />
        <NavigationBarSlot slot="secondary">
          <NavigationBarButton onClick={() => alert("Button text")}>
            <NavigationBarButtonText>Cancel</NavigationBarButtonText>
          </NavigationBarButton>
        </NavigationBarSlot>
      </NavigationBar>
      <h2>Single Wide Slot + Search + Button</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary" isWide>
          <NavigationBarIcon onClick={() => alert("icon 1")}>
            <NavigationBarMedia height="24" width="24" />
          </NavigationBarIcon>
          <NavigationBarIcon onClick={() => alert("icon 2")}>
            <NavigationBarMedia height="24" width="24" />
          </NavigationBarIcon>
        </NavigationBarSlot>
        <NavigationBarSearch value="" a11y={{ inputLabel: "Search" }} />
        <NavigationBarSlot slot="secondary">
          <NavigationBarButton onClick={() => alert("Button text")}>
            <NavigationBarButtonText>Cancel</NavigationBarButtonText>
          </NavigationBarButton>
        </NavigationBarSlot>
      </NavigationBar>
      <h2>Dual Wide Slot + Search</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary" isWide>
          <NavigationBarIcon onClick={() => alert("icon 1")}>
            <NavigationBarMedia height="24" width="24" />
          </NavigationBarIcon>
          <NavigationBarIcon onClick={() => alert("icon 2")}>
            <NavigationBarMedia height="24" width="24" />
          </NavigationBarIcon>
        </NavigationBarSlot>
        <NavigationBarSearch value="" a11y={{ inputLabel: "Search" }} />
        <NavigationBarSlot slot="secondary" isWide>
          <NavigationBarIcon onClick={() => alert("icon 3")}>
            <NavigationBarMedia height="24" width="24" />
          </NavigationBarIcon>
          <NavigationBarIcon onClick={() => alert("icon 4")}>
            <NavigationBarMedia height="24" width="24" />
          </NavigationBarIcon>
        </NavigationBarSlot>
      </NavigationBar>
      <h2>Dual Imbalanced Wide Slot + Search + Button</h2>
      <NavigationBar>
        <NavigationBarSlot slot="primary" isWide>
          <NavigationBarIcon onClick={() => alert("icon 1")}>
            <NavigationBarMedia height="24" width="24" />
          </NavigationBarIcon>
          <NavigationBarIcon onClick={() => alert("icon 2")}>
            <NavigationBarMedia height="24" width="24" />
          </NavigationBarIcon>
        </NavigationBarSlot>
        <NavigationBarSearch value="" a11y={{ inputLabel: "Search" }} />
        <NavigationBarSlot slot="secondary" isWide>
          <NavigationBarIcon onClick={() => alert("icon 3")}>
            <NavigationBarMedia height="24" width="24" />
          </NavigationBarIcon>
          <NavigationBarButton onClick={() => alert("Button text")}>
            <NavigationBarButtonText>Cancel</NavigationBarButtonText>
          </NavigationBarButton>
        </NavigationBarSlot>
      </NavigationBar>
    </div>
  );
}
