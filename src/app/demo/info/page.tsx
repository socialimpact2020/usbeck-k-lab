import SectionWrapper from "@/components/UI/SectionWrapper";

export default function DemoInfo() {
  return (
    <SectionWrapper>
      <h1 className="text-lg mb-3 font-bold">Update Info Demo</h1>
      <form className="space-x-3">
        <input
          type="text"
          name="address"
          className="input input-bordered"
          placeholder="address"
        />
        <input
          type="text"
          name="tel"
          className="input input-bordered"
          placeholder="tel"
        />
        <input
          type="email"
          name="email"
          className="input input-bordered"
          placeholder="email"
        />
        <button className="btn btn-primary">수정</button>
      </form>
    </SectionWrapper>
  );
}
