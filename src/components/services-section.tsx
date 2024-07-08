import { useState } from "react";
import { cn } from "~/utils/cn";

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState<"simple" | "pro">(
    "simple"
  );

  const handleActive = (service: "simple" | "pro") => setActiveService(service);

  return (
    <section className="my-16 py-6">
      <h2 className="mb-8 text-2xl text-center text-neutral-700" id="services">
        Сервисы
      </h2>
      <div className="flex flex-1 gap-3 sm:gap-5 sm:px-5 sm:scale-100 scale-95">
        <ServiceCard
          active={activeService === "simple"}
          label={"Расшифровка \nобщего анализа"}
          activate={() => handleActive("simple")}
          price={1500}
        />
        <ServiceCard
          active={activeService === "pro"}
          label={"Полный план \nдиеты на основе \nанализа"}
          activate={() => handleActive("pro")}
          price={7500}
        />
      </div>
    </section>
  );
};

interface ServiceCard {
  active: boolean;
  label: string;
  price: number;
  activate: () => void;
}

const ServiceCard: React.FC<ServiceCard> = ({
  active = false,
  label,
  price,
  activate,
}) => {
  return (
    <div
      onMouseEnter={activate}
      className={cn(
        "flex flex-col justify-between max-md:ml-0 p-3 border rounded-xl w-6/12 max-md:w-full h-32 duration-300",
        active
          ? "text-red-500 border-rose-300 shadow-[inset_0_0px_10px_rgba(255,225.42,225.42,0.20)] scale-105"
          : "text-neutral-500 border-neutral-300 shadow-[inset_0_0px_2px_rgba(245,245,245,0.20)] scale-95"
      )}
      style={{
        background: active
          ? "radial-gradient(39.68% 27.47% at 30.48% 18.47%, white 0%, #FFFAF9 100%)"
          : "linear-gradient(180deg, white 0%, #FAFAFA 100%)",
      }}
    >
      <div className="text-lg leading-5 whitespace-pre">{label}</div>
      <div className="font-medium font-mono text-sm">{price}₸</div>
    </div>
  );
};
