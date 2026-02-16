import React from "react";
import { Briefcase, Calendar, Camera } from "lucide-react";

const Experience = ({ exp }) => {
  const getTypeStyles = (type) => {
    switch (type?.toLowerCase()) {
      case "Internship":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Part-time":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "Organization":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Full-time":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
    }
  };

  return (
    <div className="relative pl-8 pb-12 last:pb-0 group" data-aos="fade-up">
      {/* Garis Vertikal Timeline */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#6366f1] via-[#a855f7] to-transparent group-last:h-1/2"></div>

      {/* Titik Penanda (Dot) */}
      <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-[#030014] border-2 border-[#6366f1] shadow-[0_0_10px_rgba(99,102,241,0.8)] group-hover:scale-125 transition-all duration-300"></div>

      {/* Kartu Konten */}
      <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-[#6366f1]/50 transition-all duration-300 shadow-xl">
        {/* Header: Role, Company, Type, & Period */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Icon Briefcase */}
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 flex items-center justify-center border border-white/10 shrink-0">
              <Briefcase className="w-6 h-6 text-purple-400" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-bold text-white group-hover:text-[#6366f1] transition-colors">
                  {exp.role}
                </h3>
                {/* Badge Tipe */}
                <span
                  className={`px-2 py-0.5 text-[10px] font-medium rounded-full border ${getTypeStyles(
                    exp.type
                  )}`}
                >
                  {exp.type}
                </span>
              </div>
              <p className="text-purple-400 font-medium">{exp.company}</p>
            </div>
          </div>

          {/* Periode Waktu */}
          <div className="text-sm text-gray-400 bg-black/20 px-3 py-1 rounded-full border border-white/5 h-fit w-fit flex items-center gap-2 shrink-0">
            <Calendar className="w-4 h-4" />
            {exp.period}
          </div>
        </div>

        {/* Bagian Deskripsi */}
        <div className="mt-4 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
          <ul className="list-disc list-inside space-y-2">
            {exp.description?.split("\n").map((point, i) => (
              <li key={i} className="hover:text-gray-200 transition-colors">
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Bagian Dokumentasi Foto */}
        {exp.documentation && exp.documentation.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <Camera className="w-4 h-4" />
              Documentation
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {exp.documentation.map((url, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group/img"
                >
                  <img
                    src={url}
                    alt={`Documentation ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-2">
                    <p className="text-[10px] text-white/80">View Image</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
