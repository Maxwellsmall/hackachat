"use client";
import { useModelStore } from "@/stores/modelStore";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../ui/combobox";

export function ModelPicker() {
  const { models, activeModel, setActiveModel } = useModelStore();

  return (
    <Combobox
      items={models.map((m) => m.name)}
      value={activeModel?.name}
      onValueChange={(value) =>
        setActiveModel(models.find((m) => m.name === value)!)
      }
      autoHighlight
    >
      <ComboboxInput placeholder="Select a model" />
      <ComboboxContent>
        <ComboboxEmpty>No model found</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              <span className="font-semibold">{item}</span>
              <br />
              <span>{models.find((m) => m.name === item)?.canonical_slug}</span>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
