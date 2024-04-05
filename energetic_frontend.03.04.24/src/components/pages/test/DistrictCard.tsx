const DistrictCard = () => {
  return (
    <div className="container flex flex-col gap-3">
      <div
        className="
	  h-12 bg-slate-900
	  flex items-center justify-center
	  "
      >
        <h2 className="text-[24px] tracking-wider">Название РЭС</h2>
      </div>
      <textarea
        className="
		bg-dark-cardBgColor border text-[18px]
		border-dark-borderColor px-4 py-2
	  "
        rows={4}
      >
        Описание РЭС
      </textarea>
      <div>
        <div
          className="
		bg-slate-700 flex justify-between px-4 py-2
		"
        >
          <p>Список ПС</p>
          <button>+</button>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className="
		  	flex items-center py-2 px-4
			 border-yellow-100 border
			 rounded-md
		  "
          >
            PS 1
          </div>
          <div
            className="
		  	flex items-center py-2 px-4
			 border-yellow-100 border
			 rounded-md
		  "
          >
            PS 2
          </div>
          <div
            className="
		  	flex items-center py-2 px-4
			 border-yellow-100 border
			 rounded-md
		  "
          >
            PS 3
          </div>
          <div
            className="
		  	flex items-center py-2 px-4
			 border-yellow-100 border
			 rounded-md
		  "
          >
            PS 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistrictCard;
