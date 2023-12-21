import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";

export default function WaytoCome() {
  return (
    <div>
      <CurrentSection text="Way to come" />

      <CurrentDepth depth={["Center", "Way to come"]} />

      <section className="max-w-7xl m-auto py-28">
        <div className="text-center space-y-2 mb-10">
          <h4 className="text-gray-400 text-sm font-bold">
            K_LAB MAKER SPACE GUIDE
          </h4>
          <h2 className="font-bold text-2xl">Way to come</h2>
        </div>

        <div className="mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.1518968960327!2d69.27849151203073!3d41.30555907119057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad671d84dcb%3A0x3175fb9f24cd3354!2zMjUgU2hha2hyaXNhYnogU3RyZWV0LCBUYXNoa2VudCwg7Jqw7KaI67Kg7YKk7Iqk7YOE!5e0!3m2!1sko!2skr!4v1703168927173!5m2!1sko!2skr"
            width="100%"
            height="700"
            loading="lazy"
          ></iframe>
        </div>

        <div>
          <div className="space-x-8">
            <span className="font-bold text-lg">Business Hours</span>
            <span className="">9 AM to 18:00 (Mon~Fri)</span>
          </div>

          <div className="space-x-8">
            <span className="font-bold text-lg">Customer Service Center</span>
            <span className="">+998 95 001 00 53</span>
          </div>
          <div className="space-x-8">
            <span className="font-bold text-lg">E-mail</span>
            <span className="">opk.startup@gmail.com</span>
          </div>
          <div className="space-x-8">
            <span className="font-bold text-lg">Address</span>
            <span className="">
              Sharkhrisabz Street, 25, Mirabod district, Tashkent city,
              Uzbekistan (basement)
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
