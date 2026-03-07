import { useState } from 'react';

export default function useToast() {
    const [visible, setVisible] = useState(false);
    const show = () => {
        setVisible(true);
        setTimeout(() => setVisible(false), 3000);
    };
    return { isToastVisible: visible, showToast: show };
}
