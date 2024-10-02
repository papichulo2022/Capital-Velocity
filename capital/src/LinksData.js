const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 2, url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHwwfDB8fHww" },
    { id: 3, url: "https://images.unsplash.com/photo-1697040093978-8b78a2ad66be?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, url: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhc3xlbnwwfDB8MHx8fDA%3D" },
    { id: 5, url: "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmV0YWlsfGVufDB8MHwwfHx8MA%3D%3D" },
    { id: 6, url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfDB8MHx8fDA%3D" },
    { id: 7, url: "https://images.unsplash.com/photo-1474898856510-884a2c0be546?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfDB8MHx8fDA%3D" },
    { id: 8, url: "https://images.unsplash.com/photo-1629467626971-ee6efe486a08?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1vdGVsfGVufDB8MHwwfHx8MA%3D%3D" },
    { id: 9, url: "https://images.unsplash.com/photo-1507643179773-3e975d7ac515?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwZ2FsbGVyeXxlbnwwfDB8MHx8fDA%3D" },
    { id: 10, url: "https://images.unsplash.com/photo-1593103502393-f19202baf1ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFydCUyMGdhbGxlcnl8ZW58MHwwfDB8fHww" },
    { id: 11, url: "https://images.unsplash.com/photo-1623874514711-0f321325f318?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZpdG5lc3MlMjBneW18ZW58MHwwfDB8fHww" },
    { id: 12, url: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZpdG5lc3MlMjBneW18ZW58MHwwfDB8fHww" },
    { id: 13, url: "https://images.unsplash.com/photo-1623157879673-859a2d8d4522?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmUlMjBzaG9wfGVufDB8MHwwfHx8MA%3D%3D" },
    { id: 14, url: "https://images.unsplash.com/photo-1631569483620-d3bff94d27d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvZmZlJTIwc2hvcHxlbnwwfDB8MHx8fDA%3D" },
    { id: 15, url: "https://plus.unsplash.com/premium_photo-1663932464823-1e85942a1115?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvZmZlJTIwc2hvcHxlbnwwfDB8MHx8fDA%3D" },
    { id: 16, url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdyaWN1bHR1cmV8ZW58MHwwfDB8fHww" },
    { id: 17, url: "https://images.unsplash.com/photo-1670645948617-f06d0d4a92d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVwYWlyJTIwc2VydmljZXN8ZW58MHwwfDB8fHww" },
    { id: 18, url: "https://plus.unsplash.com/premium_photo-1688700438009-78fe469f1499?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG1lZGlhfGVufDB8MHwwfHx8MA%3D%3D" },
    { id: 19, url: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxpdHxlbnwwfDB8MHx8fDA%3D" },
    { id: 20, url: "https://images.unsplash.com/photo-1666861585341-5bd1e7b1ed71?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXMlMjBzdG9yZXxlbnwwfDB8MHx8fDA%3D" },

  ];
  export default images;
