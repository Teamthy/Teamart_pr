'use client';
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Upload, Zap, Maximize2, Move, Info, RefreshCw } from 'lucide-react';

export default function VirtualTryOnModal({ product, onClose }: any) {
    const [userImage, setUserImage] = useState<string | null>(null);
    const [activeStep, setActiveStep] = useState<'upload' | 'processing' | 'preview'>('upload');
    const [scale, setScale] = useState(100);
    const fileRef = useRef<HTMLInputElement | null>(null);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = () => {
            setUserImage(String(r.result));
            setActiveStep('processing');
            setTimeout(() => setActiveStep('preview'), 2000);
        };
        r.readAsDataURL(f);
    };

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
                <div className="bg-white w-full max-w-5xl rounded-2xl overflow-hidden flex">
                    <div className="flex-1 p-6 flex items-center justify-center bg-gray-100">
                        {activeStep === 'upload' && (
                            <div className="text-center">
                                <div className="w-20 h-20 bg-black text-white rounded-2xl mx-auto flex items-center justify-center mb-4"><Camera size={28} /></div>
                                <h3 className="text-xl font-bold mb-2">Upload a photo</h3>
                                <button onClick={() => fileRef.current?.click()} className="bg-black text-white px-4 py-2 rounded">Upload</button>
                                <input ref={fileRef} type="file" accept="image/*" hidden onChange={handleFile} />
                            </div>
                        )}

                        {activeStep === 'processing' && <div>Processing... <Zap /></div>}

                        {activeStep === 'preview' && userImage && (
                            <div className="relative">
                                <img src={userImage} alt="user" className="max-w-md rounded" />
                                <img src={product.image} alt="product" className="absolute top-10 left-10 w-48 opacity-90" />
                            </div>
                        )}
                    </div>

                    <div className="w-80 p-6 border-l">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold">{product.name}</h4>
                            <button onClick={onClose}><X /></button>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                            {activeStep === 'preview' && (
                                <>
                                    <label className="block text-sm font-bold mb-2">Scale</label>
                                    <input type="range" min={50} max={200} value={scale} onChange={(e) => setScale(Number(e.target.value))} className="w-full" />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
