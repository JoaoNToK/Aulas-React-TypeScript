import { useCallback, useState } from "react";

interface IListaItem {
  title: string;
  isSelected: boolean;
}

export const Dashboard = () => {
  const [lista, setLista] = useState<IListaItem[]>([]);
  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;

        const value = e.currentTarget.value;

        e.currentTarget.value = "";

        setLista((oldlista) => {
          if (oldlista.some((listItem) => listItem.title === value))
            return oldlista;

          return [
            ...oldlista,
            {
              title: value,
              isSelected: false,
            },
          ];
        });
      }
    }, []);

  return (
    <div>
      <p>Lista</p>

      <input onKeyDown={handleInputKeyDown} />
      <p>{lista.filter((listIntem) => listIntem.isSelected).length}</p>

      <ul>
        {lista.map((listIntem) => {
          return (
            <li key={listIntem.title}>
              <input
                type="checkbox"
                checked={listIntem.isSelected}
                onChange={() => {
                  setLista((oldLista) => {
                    return oldLista.map((oldlistItem) => {
                      const newIsSelected =
                        oldlistItem.title === listIntem.title
                          ? !oldlistItem.isSelected
                          : oldlistItem.isSelected;
                      return {
                        ...oldlistItem,
                        isSelected: newIsSelected,
                      };
                    });
                  });
                }}
              />
              {listIntem.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
