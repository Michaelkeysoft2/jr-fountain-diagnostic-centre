import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Activity, 
  Clock, 
  Droplet, 
  AlertCircle, 
  Plus, 
  Check, 
  MessageCircle,
  FileCheck2,
  CalendarCheck,
  ChevronRight,
  Filter
} from 'lucide-react';
import { TEST_CATEGORIES, DIAGNOSTIC_TESTS, CLINICAL_INFORMATION } from '../data/testsData';

export default function ServicesDirectory({ selectedTests, onToggleTest }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTests = useMemo(() => {
    return DIAGNOSTIC_TESTS.filter((test) => {
      const matchesCategory = selectedCategory === 'all' || test.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        test.name.toLowerCase().includes(query) ||
        test.description.toLowerCase().includes(query) ||
        test.sample.toLowerCase().includes(query) ||
        test.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWhatsAppInquiry = (testName) => {
    const msg = encodeURIComponent(
      `Hello J-R Fountain Diagnostic Centre, I would like to inquire about the cost, preparation, and booking for the following test: ${testName}.`
    );
    window.open(`https://wa.me/${CLINICAL_INFORMATION.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-bold text-teal-700 tracking-wider uppercase bg-teal-100/70 px-3.5 py-1.5 rounded-full border border-teal-200">
            Clinical Services Directory
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Diagnostic Test Menu
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Search our laboratory catalog taken directly from our official requisition schedule. Select the investigations you require to populate your digital request form or chat with our desk.
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="mt-10 max-w-4xl mx-auto">
          {/* Search Box */}
          <div className="relative shadow-sm rounded-xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5 text-teal-600" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tests by name, organ or symptom (e.g. ECG, Troponin, Creatinine, Liver, Fasting)..."
              className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm sm:text-base shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-semibold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs / Pills */}
          <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
            {TEST_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? 'bg-teal-700 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Banner / Quick Jump Bar */}
        {selectedTests.length > 0 && (
          <div className="mt-8 max-w-4xl mx-auto bg-teal-800 text-white p-4 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center font-bold text-sm">
                {selectedTests.length}
              </div>
              <div>
                <p className="font-bold text-sm">
                  {selectedTests.length} {selectedTests.length === 1 ? 'Test' : 'Tests'} Selected for Request
                </p>
                <p className="text-xs text-teal-200">
                  Ready to be populated in your digital requisition form
                </p>
              </div>
            </div>
            <a
              href="#request-form"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 px-4 py-2 rounded-lg font-bold text-xs sm:text-sm shadow-sm transition-transform hover:scale-105"
            >
              <span>Proceed to Request Form</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Test Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTests.length > 0 ? (
            filteredTests.map((test) => {
              const isSelected = selectedTests.some((t) => t.id === test.id);
              return (
                <div
                  key={test.id}
                  className={`bg-white rounded-xl p-5 border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-teal-600 ring-2 ring-teal-500/20 shadow-md bg-teal-50/20'
                      : 'border-slate-200 hover:border-teal-300 hover:shadow-sm'
                  }`}
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-start justify-between gap-2 mb-2.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {test.category.replace('_', ' ')}
                      </span>

                      {test.fasting ? (
                        <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>Fasting Required</span>
                        </span>
                      ) : (
                        <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          No Fasting Needed
                        </span>
                      )}
                    </div>

                    {/* Test Title */}
                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                      {test.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {test.description}
                    </p>

                    {test.fastingDetails && (
                      <p className="mt-2 text-xs text-amber-800 bg-amber-50/80 p-2 rounded border border-amber-200/50">
                        <strong>Prep note:</strong> {test.fastingDetails}
                      </p>
                    )}

                    {/* Sample & TAT metadata */}
                    <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Droplet className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate" title={test.sample}>{test.sample}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate" title={test.tat}>{test.tat}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onToggleTest(test)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'bg-teal-700 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-teal-50 hover:text-teal-800 text-slate-700'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added to Form</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Select Test</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleWhatsAppInquiry(test.name)}
                      className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                      title="Ask on WhatsApp"
                      aria-label="Inquire via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-12 text-center bg-white rounded-xl border border-dashed border-slate-300">
              <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-base font-bold text-slate-700">No diagnostic tests found</p>
              <p className="text-xs text-slate-500 mt-1">Try adjusting your search keywords or filter category.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-3 text-xs font-semibold text-teal-700 hover:underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
