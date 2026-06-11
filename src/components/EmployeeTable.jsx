// src/components/EmployeeTable.jsx
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; 
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; 

// 👇 IMPORT KOMPONEN BARU: AVATAR & TOOLTIP
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import EmployeeActions from "./EmployeeActions"; 

export default function EmployeeTable({ employees }) {
  return (
    <div className="rounded-xl border border-gray-100 overflow-hidden">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="w-[100px]">ID Staff</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.length > 0 ? (
            employees.map((emp) => {
              // Mengambil huruf pertama nama untuk Fallback Avatar
              const initial = emp.name ? emp.name.charAt(0).toUpperCase() : "?";
              
              // Menentukan warna badge status secara dinamis
              const isActive = emp.status === "active" || !emp.status; 

              return (
                <TableRow key={emp.id} className="hover:bg-gray-50/50">
                  <TableCell className="font-medium text-gray-500">#{emp.id}</TableCell>
                  
                  {/* KOLOM NAMA + AVATAR + SHADCN SHEET */}
                  <TableCell>
                    <Sheet>
                      <SheetTrigger className="flex items-center gap-3 text-left outline-none group">
                        {/* 1. Implementasi Shadcn Avatar */}
                        <Avatar className="h-9 w-9 border border-gray-100 shadow-sm">
                          <AvatarImage src={emp.image} alt={emp.name} />
                          <AvatarFallback className="bg-[#EF6E4D]/10 text-[#EF6E4D] font-bold text-sm">
                            {initial}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <span className="font-semibold text-gray-900 group-hover:underline group-hover:text-[#EF6E4D] transition-colors block">
                            {emp.name}
                          </span>
                          <span className="text-xs text-gray-400 block md:hidden">
                            {emp.role || "Pharmacist"}
                          </span>
                        </div>
                      </SheetTrigger>
                      
                      <SheetContent side="right" className="w-[400px] sm:w-[540px]">
                        <SheetHeader className="mb-6">
                          <SheetTitle>Pharmacist Profile</SheetTitle>
                          <SheetDescription>
                            Detailed employment information for this staff member.
                          </SheetDescription>
                        </SheetHeader>
                        
                        {/* Konten Detail Profil di dalam Sheet */}
                        <div className="space-y-6">
                          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                            <Avatar className="h-14 w-14 border border-white shadow-md">
                              <AvatarImage src={emp.image} alt={emp.name} />
                              <AvatarFallback className="bg-[#EF6E4D] text-white font-bold text-lg">
                                {initial}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-bold text-lg text-gray-900">{emp.name}</h4>
                              <p className="text-sm text-gray-500">ID: #{emp.id} • {emp.role || "Pharmacist"}</p>
                            </div>
                          </div>

                          <div className="border-t pt-4 space-y-3">
                            <div>
                              <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Email Address</span>
                              <p className="text-sm font-medium text-gray-800">{emp.email || "pharmacist@hospital.com"}</p>
                            </div>
                            <div>
                              <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Assigned Shift</span>
                              <p className="text-sm font-medium text-gray-800">Morning (08:00 AM - 04:00 PM)</p>
                            </div>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </TableCell>

                  <TableCell className="text-gray-600">{emp.role || "Pharmacist"}</TableCell>
                  
                  {/* KOLOM STATUS + SHADCN TOOLTIP */}
                  <TableCell>
                    <TooltipProvider delayDuration={200}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold cursor-help inline-block ${
                            isActive 
                              ? "bg-green-50 text-green-700 border border-green-200" 
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}>
                            {isActive ? "Active" : "On Leave"}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-900 text-white rounded-xl text-xs p-2.5 shadow-md max-w-xs">
                          <p>
                            {isActive 
                              ? "This staff is active and authorized to access the pharmacy system." 
                              : "This staff is currently on leave. Temporary system restriction applied."}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>

                  <TableCell className="text-right">
                    <EmployeeActions employee={emp} />
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-12 text-gray-400">
                No pharmacists found matching the criteria.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}