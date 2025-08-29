interface profileImgProps {
  imgUrl?: string;
}

export default function ProfileImg({ imgUrl = "images/profile.png" }: profileImgProps) {
  return <img src={imgUrl} alt="profile" />;
}
