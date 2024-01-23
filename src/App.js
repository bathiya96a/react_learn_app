import './App.css'

const avatar = [
  "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
  "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTije25_4V3n8BBQhSsXZZo3YNEV3xe7Ymwe0J4RPXlQ979dYa3-0DMCdWjb4GaFWZLVGE&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkTCtx2w5KuPMeLNATOcy058HV24Al5jMs4Q&usqp=CAU",
  "https://www.kerala9.com/wp-content/gallery/trisha/trisha-krishnan-in-golden-colour-saree-images.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_VvgfUo6unuT_Jh53rUdvIOyXfAgVc5q7mvm7xhgClWp_NXKzBhGMNzX9RkTCiibUFE&usqp=CAU"
];

const User1 = {
  avatar:avatar[0],
  name :'Sammy shenghai',
  designation:'Photographer',
  salary:46000
}

const User2= {
  avatar:avatar[1],
  name :'Milina Hankoff',
  designation:'Doctor',
  salary:48000
}
const User3 = {
  avatar:avatar[2],
  name :'Teila Brands',
  designation:'Model',
  salary:46000
}
const User4 = {
  avatar:avatar[3],
  name :'Samantha Jade',
  designation:'Lawyer',
  salary:44000
}
const User5 = {
  avatar:avatar[4],
  name :'Neyon Krifft',
  designation:'Engineer',
  salary:45000
}
const User6 = {
  avatar:avatar[5],
  name :'Sara Maden',
  designation:'Developer',
  salary:45000
}

// const customerNames

function UserManager() {
  return (
    <div className = 'wrapper'>
      <User avatar={User1.avatar} name ={User1.name} designation={User1.designation} salary={User1.salary}/>
      <User avatar={User2.avatar} name ={User2.name} designation={User2.designation} salary={User2.salary}/>
      <User avatar={User3.avatar} name ={User3.name} designation={User3.designation} salary={User3.salary}/>
      <User avatar={User4.avatar} name ={User4.name} designation={User4.designation} salary={User4.salary}/>
      <User avatar={User5.avatar} name ={User5.name} designation={User5.designation} salary={User5.salary}/>
      <User avatar={User6.avatar} name ={User6.name} designation={User6.designation} salary={User6.salary}/>
    </div>
  );
}

const User = (props)=> {
  const {avatar, name, designation, salary} = props;
  return (
    <div className="user-outer">
      <Avatar userAvatar={avatar} />
      <UserData name={name} designation={designation} salary={salary}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo fugit
        consequatur distinctio a maxime. Assumenda provident deserunt saepe a,
        velit sint repellendus possimus quam quae quisquam cum aliquid nemo.
        Quaerat.
      </UserData>
    </div>
  );
}

const Avatar = ({userAvatar})=> {
  return (
    <div className="avatar-outer">
      <img src={userAvatar} alt='girl_capture_scene'></img>
    </div>
  );
}

const UserData = ({name, designation, salary, children})=> {
  console.log(children);
  return (
    <section className="user-data">
      <UserName userName = {name}/>
      <Designation  designation = {designation}/>
      <Salary salary={salary}/>
      <p>
        {children}
      </p>
    </section>
  );
}

const UserName = ({userName})=> {
  return <h1 style={{ color: "#a234aa" }}>{userName}</h1>;
}

const Designation = ({designation}) => {
  const inlineStyle = {
    fontStyle: "italic",
  };
  return <h3 style={inlineStyle}>{designation}</h3>;
};

const Salary = ({salary}) => {
  return <h3 style={{ fontStyle: "italic" }}>{salary}</h3>;
};


export default UserManager;