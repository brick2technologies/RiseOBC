import { Facebook, Instagram, Youtube} from "lucide-react";

const SocialBar = () => {
  return (
    <div className="fixed left-2 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">

      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white shadow-lg p-3 rounded-full hover:bg-blue-100 transition-all flex items-center justify-center"
      >
        <Facebook className="text-blue-600" size={22} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white shadow-lg p-3 rounded-full hover:bg-pink-100 transition-all flex items-center justify-center"
      >
        <Instagram className="text-pink-600" size={22} />
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white shadow-lg p-3 rounded-full hover:bg-red-100 transition-all flex items-center justify-center"
      >
        <Youtube className="text-red-600" size={22} />
      </a>

      {/* Twitter */}
      {/* <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white shadow-lg p-3 rounded-full hover:bg-blue-100 transition-all flex items-center justify-center"
      >
        <Twitter className="text-sky-500" size={22} />
      </a> */}
    </div>
  );
};

export default SocialBar;
