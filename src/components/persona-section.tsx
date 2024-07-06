import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

export const PersonasSection = () => {
  return (
    <Tabs defaultValue="ill" className="flex flex-col my-32 h-[335px]">
      <TabsList>
        <TabsTrigger value="ill">Болеешь часто?</TabsTrigger>
        <TabsTrigger value="tired">Устал?</TabsTrigger>
      </TabsList>
      <Persona
        value="ill"
        bubbleText={"Почему я всегда устал, \nдаже после ночного сна?"}
        chipText="дефицит витамин D, гормоны щитовидной железы"
      />
      <Persona
        value="tired"
        bubbleText={"Почему я так часто болею?"}
        chipText="дефицит лейкоцитов, маркеры воспаления"
      />
    </Tabs>
  );
};

interface Persona {
  value: string;
  bubbleText: string;
  chipText: string;
}

const Persona: React.FC<Persona> = ({ value, bubbleText, chipText }) => (
  <TabsContent value={value} className="relative rounded-xl overflow-hidden">
    <img src={`/${value}.png`} alt="illustration" className="w-full" />
    <BubbleText text={bubbleText} />
    <div className="right-1.5 bottom-1.5 absolute flex gap-1">
      <div className="text-neutral-400 text-xs" style={chipStyle}>
        {chipText}
      </div>
      <div className="justify-center !p-0 w-5 text-red-500" style={chipStyle}>
        !
      </div>
    </div>
  </TabsContent>
);

const chipStyle: React.CSSProperties = {
  background:
    "radial-gradient(100.00% 106.36% at 5040.15% 53.18%, white 0%, #F5F5F5 100%)",
  boxShadow: "0px 0px 21.899999618530273px rgba(0, 0, 0, 0.25)",
  borderRadius: "9999px",
  display: "flex",
  alignItems: "center",
  padding: "0px 8px",
  height: "20px",
};

const BubbleText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="top-5 left-3 z-10 absolute">
      <div
        className="relative z-10 backdrop-blur-xl px-3.5 py-2 pb-2.5 rounded-xl text-base leading-4 whitespace-pre"
        style={{
          background:
            "radial-gradient(79.00% 58.57% at 74.52% 156.11%, rgba(255, 255, 255, 0.80) 0%, rgba(239, 239, 239, 0.80) 100%)",
          boxShadow: "0px 4px 4px rgba(255, 255, 255, 0.25) inset",
        }}
      >
        {text}
      </div>
      <Tail />
    </div>
  );
};

const Tail = () => (
  <svg
    width="20"
    height="14"
    className="bottom-0 -left-1 absolute"
    viewBox="0 0 20 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b_50_188)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 13.6716V14H6C13.732 14 20 7.73199 20 0H5.00033C5.00033 2.73829 5.00033 4.10744 4.80939 5.25169C4.24701 8.62183 2.49706 11.5753 0 13.6716Z"
        fill="#E6E5EB"
        fill-opacity="0.8"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_50_188"
        x="-40"
        y="-40"
        width="100"
        height="94"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_50_188"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_50_188"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
