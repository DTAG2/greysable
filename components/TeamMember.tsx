"use client";

import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export default function TeamMember({ name, role, bio, initials }: TeamMemberProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="group bg-grey-950 border border-grey-800 hover:border-grey-600 transition-colors duration-300"
    >
      {/* Avatar area */}
      <div className="aspect-[4/3] bg-grey-900 border-b border-grey-800 flex items-center justify-center relative overflow-hidden">
        <span className="text-5xl font-bold text-grey-700 group-hover:text-grey-500 transition-colors">
          {initials}
        </span>
        {/* Corner accent */}
        <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-grey-700" />
        <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-grey-700" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold uppercase tracking-tight">{name}</h3>
        <p className="text-grey-500 text-sm font-medium uppercase tracking-wider mt-1">{role}</p>
        <p className="mt-4 text-grey-400 text-sm leading-relaxed">{bio}</p>
      </div>
    </motion.div>
  );
}
